# spawn-await

[spawn-await](https://github.com/mohammadyaser/spawn-await) is synchronous module and will block the Node.js event loop, pausing execution of any additional code until the spawned process exits.

#### NOTE: don't need `await`

```
import {Spawn} from 'spawn-await'; 
  
let firstCommand = "ls";
const {stdout, stderr, status } = Spawn(firstCommand);
```

#### Returns: <Object>
stdout <string> The contents of output.
stderr <string> The contents of output.
status <number> | <null> The exit code of the subprocess, or null if the subprocess terminated due to a signal.