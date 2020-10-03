#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main(int argc, char **argv) {
  pid_t pid;
  int data = 10;

  pid = fork();
  if (pid < 0) {
    printf("fork failed id = %d\n", pid);
  }

  printf("forked successfully id = %d\n", pid);

  if (pid == 0) {
    data += 10;
  } else {
    data -= 10;
    sleep(20);
  }
  printf("data = %d\n", data);
  return 0;
}