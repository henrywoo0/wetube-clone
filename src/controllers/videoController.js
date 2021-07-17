let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 1,
        createdAt: "2 days ago",
        views: 12,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 10,
        comments: 102,
        createdAt: "10 months ago",
        views: 1003,
        id: 3,
    },
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
    const { id } = req.params;  //   ==   const id = req.params.id
    const video = videos[id-1];
    return res.render("watch");
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");