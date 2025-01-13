import { getBuffer, ArrayBufferConverter } from "../app";

test("Проверка загрузки и преобразования ArrayBuffer", () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();

    converter.load(buffer);

    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})

test("Проверка загрузки и преобразования с пустыми данными", () => {
    const converter = new ArrayBufferConverter();
    const buffer = new ArrayBuffer(0);

    converter.load(buffer);

    const result = converter.toString();
    expect(result).toBe('');
})