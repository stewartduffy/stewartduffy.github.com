import React, { Component } from 'react'

//styles
import './scss/_andada.css'
import './scss/base.scss'
import cvLink from './downloads/stewart_duffy_cv.pdf' // Tell Webpack this JS file uses this image

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/stewartduffy/1b0a9759dfba523807514af7d11df6ca`,
      `/raw/stewartduffy-data.json`
    ].join('')

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          jobs: data.jobs
        })
      })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="heading-logo text-hide">
            Stewart Duffy / Front-End Developer
          </h1>
          <div className="nav-container clearfix">
            <div className="container">
              <nav className="pull-left hidden-xs">
                <a
                  className="nav-icon"
                  href="http://nz.linkedin.com/in/stewartduffy/en"
                >
                  <i className="fa fa-linkedin fa-fw" />
                </a>
                <a className="nav-icon" href="https://twitter.com/sbf_duffy">
                  <i className="fa fa-twitter fa-fw" />
                </a>
                <a className="nav-icon" href="http://github.com/stewartduffy">
                  <i className="fa fa-github-alt fa-fw" />
                </a>
                <a className="nav-icon" href="skype:stewart.duffy">
                  <i className="fa fa-skype fa-fw" />
                </a>
                <a
                  className="nav-icon"
                  href="https://open.spotify.com/user/1143680138"
                >
                  <i className="fa fa-spotify fa-fw" />
                </a>
              </nav>
              <nav className="pull-right hidden-xs">
                <a className="nav-item active" href="/">
                  about
                </a>{' '}
                /
                <a className="nav-item" href="#contact">
                  contact
                </a>{' '}
                /
                <a className="nav-item" href={cvLink}>
                  cv
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="container main-container">
          <div className="main">
            <div className="row">
              <div className="col-md-1 hidden-sm hidden-xs">
                <i className="main-icon fa fa-anchor" />
              </div>
              <div className="col-md-11">
                <p>
                  Hello! I'm Stewart Duffy, a{' '}
                  <strong>Front-End Developer</strong> who makes websites and
                  apps. I mostly trade in the trifecta of HTML5, CSS3 &amp;
                  JavaScript, but like any self-respecting digital worker I
                  utilise an array of other tools &amp; tech to get the job
                  done..
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1 hidden-sm hidden-xs">
                <i className="main-icon fa fa-coffee" />
              </div>
              <div className="col-md-11">
                <p>
                  I enjoy what I do, and I love the web development community.
                  Naturally I like to meet other fellow web workers, so I
                  regularly go to local meetups, and I jump at the opportunity
                  to attend conferences &amp; workshops to learn from the
                  masters.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1 hidden-sm hidden-xs">
                <i className="main-icon fa fa-code" />
              </div>
              <div className="col-md-11">
                <h3>Conferences &amp; Workshops</h3>
                <ul className="list-unstyled">
                  <li>Codemania 2016 / Auckland, New Zealand</li>
                  <li>JSConf EU 2013 / Berlin, Germany</li>
                  <li>Full Frontal Tooling Tutorials 2012 / Brighton, UK</li>
                  <li>dotJS 2012 / Paris, France</li>
                  <li className="last">WDCNZ 2011 / Wellington, New Zealand</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1 hidden-sm hidden-xs">
                <i className="main-icon fa fa-bullhorn" />
              </div>
              <div className="col-md-11">
                <p>
                  I have been working in the industry for over six years;
                  working on a variety of projects either through freelancing,
                  contracting or permanent employment. With agency, startup
                  &amp; client-side experience I have worked on projects in
                  multiple industries including Education, Retail,
                  Telecommunications, Print Media, Government and Advertising.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1 hidden-sm hidden-xs">
                <i className="main-icon fa fa-wrench" />
              </div>
              <div className="col-md-11">
                <h3>Work History</h3>
                <ul className="list-unstyled">
                  {this.state.jobs.map((job, index) => (
                    <li>
                      <a href={job.link}>{job.name}</a> / {job.city}
                      <br />
                      <small>
                        {job.startDate} – {job.endDate}
                      </small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1 hidden-sm hidden-xs">
                <i className="main-icon fa fa-phone" />
              </div>
              <div className="col-md-11">
                <h3 id="contact">Let’s talk</h3>
                {/*<p>I am currently looking for something new, so if you think that’s you then call 027 383 3901 or <a href="mailto:duffy.stewart@gmail.com">email me</a> at duffy.stewart@gmail.com.</p>*/}
                <p>
                  I am not currently looking for something new, however I am
                  always happy to talk. If you want to chat please call 027 383
                  3901 or <a href="mailto:duffy.stewart@gmail.com">
                    email me
                  </a>{' '}
                  at duffy.stewart@gmail.com.
                </p>
                <p>
                  If you find me interesting, but you would rather stalk than
                  talk, here’s my{' '}
                  <a href="http://nz.linkedin.com/in/stewartduffy/en">
                    LinkedIn
                  </a>, <a href="https://twitter.com/sbf_duffy">Twitter</a>{' '}
                  &amp; <a href={cvLink}>CV</a> to get you started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
