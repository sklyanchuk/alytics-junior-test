var question = {
  42: "someValue"
};

(function answer(question) {
  console.log(parseInt(Object.keys(question)[0]));
})(question);
