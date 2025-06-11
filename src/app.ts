import express from 'express';
import cors from 'cors';
import startConsumer, { checkHealth, stopConsumer } from './consumer.js';

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

let server: ReturnType<typeof app.listen>;

async function initializeApp() {
  try {
    app.post('/', async (req, res) => {
      console.log("Starting consumer service...");
      await startConsumer();
      res.status(200).json({ message: 'Consumer service is running and listening for messages.' });
    });

    app.get('/health', async (req, res) => {
      const healthStatus = await checkHealth();
      if (healthStatus) {
        res.status(200).json({ status: 'ok' });
      } else {
        res.status(503).json({ status: 'stopped' });
      }
    });

    server = app.listen(port, () => {
      console.log(`Express is listening at http://localhost:${port}`);
    });

    process.on('SIGTERM', () => shutdown(1));
    process.on('SIGINT', () => shutdown(1));
    process.on('uncaughtException', (err) => {
      console.error('[CRITICAL] Uncaught Exception:', err);
      shutdown(1);
    });
    process.on('unhandledRejection', (reason, promise) => {
      console.error('[CRITICAL] Unhandled Rejection at:', promise, 'reason:', reason);
    });

  } catch (error) {
    console.error("Failed to start the application:", error);
    process.exit(1);
  }
}

async function shutdown(exitCode: number = 0) {
  console.log('[App] Received shutdown signal. Starting graceful shutdown...');

  if (server) {
    server.close(async (err) => {
      if (err) {
        console.error('[App] Error closing HTTP server:', err);
        process.exit(1);
      }
      console.log('[App] HTTP server closed.');

      await stopConsumer();

      console.log('[App] Process exiting.');
      process.exit(exitCode);
    });
  } else {
    await stopConsumer();
    console.log('[App] Process exiting (HTTP server not started).');
    process.exit(exitCode);
  }
}

initializeApp();