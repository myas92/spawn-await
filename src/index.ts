import {spawnSync} from "child_process";
export const Spawn = (command:any) => {

    try {
        const child = spawnSync(command)        
            return { stdout: child.stdout.toString(), stderr: child.stderr.toString(), status: child.status }


    } catch (error) {
        return error
    }
}

Spawn("ls")