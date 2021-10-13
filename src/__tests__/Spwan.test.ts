import { Spawn } from '../index';

describe("test Spwan function", () => {
  it("should return 1", () => {
    const res:any =  Spawn('man');
    expect(res.status).toBe(1);
  });
});