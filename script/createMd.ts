import fs from "fs";
import shell from "shelljs";

const path = "./Repo";
shell.cd(path);

if (
  shell.exec("git clone https://github.com/ArchishmanSengupta/rate-limiter")
    .code === 0
) {
  console.log("Cloned..");
}

export const Subscribe = async (url: string) => {};
