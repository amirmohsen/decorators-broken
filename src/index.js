function decorateA(target) {
  return class extends target {
    a() {
      console.log("a");
    }
  };
}

function decorateB(target) {
  return class extends target {
    b() {
      console.log("b");
    }
  };
}

@decorateB
@decorateA
class Target {}

const target = new Target();

target.b();

target.a(); // This throws an error: TypeError: target.a is not a function
