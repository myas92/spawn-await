import { Spawn } from '../index';
test('My Greeter', () => {
  let res:any =  Spawn('man');
  expect(res.status).toBe(1);
});