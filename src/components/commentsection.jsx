import { useEffect } from "react";

function CommentSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "Dimsmdraa/portfolio-dimsam");
    script.setAttribute("data-repo-id", "R_kgDOPznvYw");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOPznvY84CwPyg");
    script.setAttribute("data-mapping", "url");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "purple_dark");
    script.setAttribute("data-lang", "id");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    document.querySelector(".giscus-container").appendChild(script);
  }, []);

 return (
  <div
    className="comments-section"
    style={{
      marginTop: "80px",
      marginBottom: "50px",
      padding: "40px 20px",
      background: "rgba(0, 0, 0, 0.3)",
      borderRadius: "20px",
      backdropFilter: "blur(6px)",
      textAlign: "center",

      
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <h2
      style={{
        color: "#e0b3ff",
        textAlign: "center",
        marginBottom: "25px",
        fontWeight: "600",
        fontSize: "1.6rem",
      }}
    >
      Leave Your Mark Here! 💬
    </h2>
    <div className="giscus-container" />
  </div>
);


}

export default CommentSection;
