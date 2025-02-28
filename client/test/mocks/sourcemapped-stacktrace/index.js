 

export function mapStackTrace(stack, done) {
  done(stack.split('\n'));
}
