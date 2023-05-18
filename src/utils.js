import path from "path";

import { fileURLToPath } from "url";

// Debemos crear nuestra propia variable __dirname a travÃ©s de este mÃ©todo si usamos ESM

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);
