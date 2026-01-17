import { Router } from "express";


const app = Router();

app.get("/", async (req, res) => {
   res.render('index')
});
app.get("/view", async (req, res) => {
    res.render('view')
 });
 app.get("/dashboard", async (req, res) => {
    res.render('dashboard')
 });

export default app;