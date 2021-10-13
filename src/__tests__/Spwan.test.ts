import { Spawn } from '../index';

describe("test Spwan function", () => {
  it("should return 1", () => {
    let res:any =  Spawn('man');
    expect(res.status).toBe(1);
  });
});