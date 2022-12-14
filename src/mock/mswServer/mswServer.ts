import { setupServer } from 'msw/node';
import globalMswHandlers from '../mswHandlers';

const mswServer = setupServer(...globalMswHandlers);
export default mswServer;
