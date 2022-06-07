function fetchUser1(id, cb) {
  setTimeout(() => {
    console.log("wait 0.1 sec");
    const user = {
      id,
      name: `User${id}`,
      email: `${id}test.com`,
    };
    cb(user);
  }, 100);
}
// callback 함수를 사용한 비동기 환경에서 테스트하는 방법
// done 함수를 사용한다.

function fetchUser2(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec");
      const user = {
        id,
        name: `User${id}`,
        email: `${id}test.com`,
      };
      resolve(user);
    }, 100);
  });
}

// callback 을 사용하는 비동기환경에서 코드 테스트
// done 이라는 함수를 사용하여 테스트를 완료한다.
test("fetch a user (callback)", (done) => {
  fetchUser1(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1test.com",
    });
    done();
  });
});

// promise를 사용하는 비동기환경에서 코드 테스트
// return 문을 명시하여 테스트를 완료한다.
test("fetch a user (promise)", () => {
  return fetchUser2(2).then((user) => {
    expect(user).toEqual({
      id: 2,
      name: "User2",
      email: "2test.com",
    });
  });
});

// async/await를 사용하는 비동기환경에서 코드 테스트
test("fetch a user async/await", async () => {
  const user = await fetchUser2(3);
  expect(user).toEqual({
    id: 3,
    name: "User3",
    email: "3test.com",
  });
});
