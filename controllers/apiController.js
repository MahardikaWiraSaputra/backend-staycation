module.exports = {
    landingPage: (req,res) => {
        const message = 'Hello JESON';
        res.status(200).json({ message })
    }
}