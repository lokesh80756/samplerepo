function father (callback){
    console.log("lokesh meets");
    callback();
}
function love (callback){
    console.log("revathi love");
    callback();
}
function marriage (callback){
    console.log("truns to weeding");
    callback();
}
function son (callback){
    console.log("baby jashwanth");
    callback();
}
father(()=>{
    love(()=>{
        marriage(()=>{
            son(()=>{
                console.log("happy family");
            })
        })
    })
})