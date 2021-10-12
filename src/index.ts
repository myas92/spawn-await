const spawnNode = require('child_process').spawnSync;
export const Spawn = (command:any) => {

    try {
        const child = spawnNode(command)
        if (child.status == 1) {
            let x = child.stderr.toString()
            return { stdout: child.stdout.toString(), stderr: child.stderr.toString(), status: child.status }

        }
        else{
            throw new Error("Command Is Invalid")
        }

    } catch (error) {
        console.log(error);
        return error
    }
}

