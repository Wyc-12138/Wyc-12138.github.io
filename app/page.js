const projects = [
  {
    title: "项目一",
    description: "用一句话说明这个项目解决了什么问题，以及你在其中做了什么。",
    href: "https://github.com/Wyc-12138"
  },
  {
    title: "项目二",
    description: "可以放课程项目、研究代码、工具脚本，或者任何你希望别人看到的作品。",
    href: "https://github.com/Wyc-12138"
  },
  {
    title: "项目三",
    description: "等你有具体仓库后，把这里换成真实项目名、说明和链接。",
    href: "https://github.com/Wyc-12138"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Personal Homepage</p>
          <h1>你好，我是 Wyc-12138</h1>
          <p className="intro">
            这里是我的个人主页，用来展示项目、学习记录和联系方式。第一版先保持简单，
            重点是让页面稳定上线，后面再逐步加内容。
          </p>
          <div className="actions">
            <a className="primary" href="https://github.com/Wyc-12138">
              查看 GitHub
            </a>
            <a className="secondary" href="#projects">
              浏览项目
            </a>
          </div>
        </div>

        <div className="profilePanel" aria-label="Profile summary">
          <div className="avatar">W</div>
          <div>
            <p className="panelLabel">当前页面状态</p>
            <p className="panelTitle">GitHub Pages 起步版</p>
          </div>
          <dl className="quickFacts">
            <div>
              <dt>定位</dt>
              <dd>个人主页</dd>
            </div>
            <div>
              <dt>技术</dt>
              <dd>Next.js 静态导出</dd>
            </div>
            <div>
              <dt>部署</dt>
              <dd>GitHub Pages</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeader">
          <p className="eyebrow">Projects</p>
          <h2>项目展示</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <a className="projectCard" href={project.href} key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>打开链接</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>联系我</h2>
          <p>
            你可以把这里改成邮箱、博客、学校主页、LinkedIn 或其他公开联系方式。
          </p>
        </div>
        <a className="primary" href="https://github.com/Wyc-12138">
          GitHub 主页
        </a>
      </section>
    </main>
  );
}
