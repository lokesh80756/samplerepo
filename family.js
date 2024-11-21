function father (callback){
    console.log("lokesh meets dream girl");
    callback();
}
function love (callback){
    console.log("revathi and love started");
    callback();
}
function marriage (callback){
    console.log("truns into family weeding");
    callback();
}
function son (callback){
    console.log("cute baby jashwanth born");
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
