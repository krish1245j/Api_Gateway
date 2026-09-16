const gateway=require("./src/app")

const PORT =5000; 

gateway.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

gateway.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Gateway is Working"
  
    })
})

gateway.get("/api/users",async(req,res)=>{
    const response=await fetch('http://localhost:3001/api/users');
    if(!response){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
    const data=await response.json();
    const hello=" Response comming from port 5000 "
    const extra={
        hello
    }
     
    res.json({
        extra,
        data
    });

})