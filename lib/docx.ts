import mammoth from "mammoth"

/**
 * Extract text from a DOCX file buffer using Mammoth.
 * @param buffer - A Buffer of the DOCX file contents.
 * @returns The raw extracted text.
 */
export async function extractTextFromDOCXBuffer(buffer: Buffer): Promise<string> {
  const { value } = await mammoth.extractRawText({ buffer })
  return value
}
