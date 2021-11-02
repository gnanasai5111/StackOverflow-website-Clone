function togglerrotate(){
  document.querySelector('.navbar-toggler').classList.toggle("change");
}
// questions section changing image src
$(".q2").click(function(){
$(".qi").attr("src","https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=9d2eb0efdc17");
$(".qh").text("Upvoting helps exceptional content rise to the top and bring awareness to useful responses.");
});
$(".q1").click(function(){
$(".qi").attr("src","https://cdn.sstatic.net/Img/home/illo-feats-ask.svg?v=b6cd07f0765a");
$(".qh").text("Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.");
});
$(".q3").click(function(){
$(".qi").attr("src","https://cdn.sstatic.net/Img/home/illo-feats-ask.svg?v=b6cd07f0765a");
$(".qh").text("Answer a question to share your knowledge with the world or in private with your team.");
});
$(".q4").click(function(){
$(".qi").attr("src","https://cdn.sstatic.net/Img/home/illo-feats-tags.svg?v=0655cbe6bffa");
$(".qh").text("Tags help make information searchable and find answers that are important to you.");
});
$(".q5").click(function(){
$(".qi").attr("src","https://cdn.sstatic.net/Img/home/illo-feats-accept.svg?v=f2be4b8dfdac");
$(".qh").text("Accept the answer which solved your problem to let others benefit from the valuable information.");
});
$(".q6").click(function(){
$(".qi").attr("src","https://cdn.sstatic.net/Img/home/illo-feats-recognize.svg?v=4f011d7173e8");
$(".qh").text("Our reputation system rewards both the new & experienced based on contribution and activity.");
});
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum == 0){

    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);

    return numbers;
  }
}
console.log(rangeOfNumbers(4, 9));
