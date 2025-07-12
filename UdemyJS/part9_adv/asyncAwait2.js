function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched");
        }, 2000);
    });
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment data fetched");
        }, 3000);
    });
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        const blogData = await fetchPostData();
        const commentData = await fetchCommentData();

        console.log("Blog Data", blogData);
        console.log("Comment Data", commentData);

        console.log("Fetch Completed");
    } catch (error) {
        console.error("Error fetching blog data", error);
    }
}

getBlogData();
