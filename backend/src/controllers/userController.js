const getUser = (req, res) => {
    res.json({
        success: true,
        message: "Response coming from backend service",
        user: {
            id: 1,
            name: "User",
            role: "student"
        }
    });
};

module.exports = {
    getUser
};