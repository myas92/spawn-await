import {spawnSync} from "child_process";
export const Spawn = (command:any) => {

    try {
        const child = spawnSync(command)
        if (child.status === 1) {
            return { stdout: child.stdout.toString(), stderr: child.stderr.toString(), status: child.status }

        }
        else{
            throw new Error("Command Is Invalid")
        }

    } catch (error) {
        return error
    }
}