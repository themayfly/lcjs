#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <sys/types.h>

int main(int argc, char **argv) {
  pid_t pid, child;
  int data = 10;
  int state;

  pid = fork();
  if (pid < 0) {
    printf("fork failed id = %d\n", pid);
  }

  printf("forked successfully id = %d\n", pid);

  if (pid == 0) {
    data += 10;
  } else {
    data -= 10;
    child = wait(&state);
    printf("child id = %d\n", child);
    printf("returned status = %d\n", WEXITSTATUS(state));
    sleep(20);
  }
  printf("data = %d\n", data);
  return 0;
}