describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

describe("pow", function () {
  before(() => alert("Тестирование началось – перед тестами"));

  describe("возводит x в степень 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  after(() => alert("Тестирование закончилось – после всех тестов"));
});

describe("тест", function () {
  beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
  afterEach(() => alert("После теста – заканчиваем выполнение теста"));

  it("тест 1", () => alert(1));
  it("тест 2", () => alert(2));
});
