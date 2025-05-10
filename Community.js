import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      author: "Jake", 
      content: "Welcome to the Player Connect community! Share your experiences and support each other.",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 3,
      category: "Announcement"
    },
    { 
      id: 2, 
      author: "Sarah", 
      content: "Just got released, feeling a bit lost. Any advice on where to start with career planning?",
      timestamp: "1 hour ago",
      likes: 8,
      comments: 5,
      category: "Career Advice"
    },
    { 
      id: 3, 
      author: "Daniel", 
      content: "Stay positive, Sarah! I was in the same position last year. The career counseling here helped me a lot.",
      timestamp: "45 mins ago",
      likes: 15,
      comments: 2,
      category: "Support"
    },
    { 
      id: 4, 
      author: "Coach Mike", 
      content: "Hi Sarah, feel free to message me privately for some guidance! I've helped many players through this transition.",
      timestamp: "30 mins ago",
      likes: 20,
      comments: 1,
      category: "Expert Advice"
    },
    {
      id: 5,
      author: "Emma",
      content: "Just completed my UEFA coaching certification! Anyone else working towards their coaching badges?",
      timestamp: "25 mins ago",
      likes: 18,
      comments: 4,
      category: "Education"
    },
    {
      id: 6,
      author: "Marcus",
      content: "Looking for advice on balancing football with university studies. Any tips from those who've done it?",
      timestamp: "15 mins ago",
      likes: 10,
      comments: 3,
      category: "Education"
    }
  ]);
  const [newPost, setNewPost] = useState("");
  const [activeTab, setActiveTab] = useState('networking');
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Career Planning Challenge",
      description: "Create and present your 5-year career development plan | Reward: Professional coaching session",
      deadline: "18/04/25",
      participants: 45,
      leaderboard: [
        { name: "Sarah Johnson", score: 95 },
        { name: "Michael Brown", score: 92 },
        { name: "Emma Wilson", score: 88 }
      ]
    },
    {
      id: 2,
      title: "Business Pitch Competition",
      description: "Develop and pitch your post-football business idea | Reward: Business mentorship package",
      deadline: "13/03/25",
      participants: 32,
      leaderboard: [
        { name: "David Lee", score: 98 },
        { name: "Sophie Martin", score: 94 },
        { name: "James Wilson", score: 91 }
      ]
    },
    {
      id: 3,
      title: "Future Leader Challenge",
      description: "Complete a series of leadership tasks and document your learning journey | Reward: Executive coaching package",
      deadline: "19/02/25",
      participants: 28,
      leaderboard: [
        { name: "Tom Anderson", score: 96 },
        { name: "Lisa Park", score: 93 },
        { name: "Chris Taylor", score: 90 }
      ]
    },
    {
      id: 4,
      title: "Community Impact Project",
      description: "Design and implement a sports-based community initiative | Reward: Community development grant",
      deadline: "02/04/25",
      participants: 38,
      leaderboard: [
        { name: "Rachel Green", score: 97 },
        { name: "Mark Davis", score: 94 },
        { name: "Olivia Smith", score: 92 }
      ]
    },
    {
      id: 5,
      title: "Digital Skills Bootcamp",
      description: "Master essential digital skills for modern careers through practical projects | Reward: Digital tools subscription",
      deadline: "31/05/25",
      participants: 42,
      leaderboard: [
        { name: "Alex Turner", score: 96 },
        { name: "Sophia Chen", score: 94 },
        { name: "Ryan Patel", score: 92 }
      ]
    },
    {
      id: 6,
      title: "Wellness Performance Challenge",
      description: "Develop and maintain a holistic wellness routine for peak performance | Reward: Wellness retreat experience",
      deadline: "15/06/25",
      participants: 35,
      leaderboard: [
        { name: "Mia Rodriguez", score: 98 },
        { name: "Lucas Kim", score: 95 },
        { name: "Isabella Wong", score: 93 }
      ]
    }
  ]);
  const [discussionPosts, setDiscussionPosts] = useState([
    {
      id: 1,
      author: "John Smith",
      content: "Has anyone here successfully transitioned into sports journalism? Would love to hear about your experience.",
      timestamp: "30 mins ago",
      replies: 8,
      likes: 15
    },
    {
      id: 2,
      author: "Sarah Johnson",
      content: "Looking for advice on balancing coaching certification with family commitments. Any tips?",
      timestamp: "2 hours ago",
      replies: 12,
      likes: 25
    },
    {
      id: 3,
      author: "Jake Jones",
      content: "Just been released from my club. Feeling lost and unsure about my next steps. Any advice?",
      timestamp: "3 hours ago",
      replies: 23,
      likes: 41
    }
  ]);

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setPosts([{
        id: posts.length + 1,
        author: "You",
        content: newPost,
        timestamp: "Just now",
        likes: 0,
        comments: 0,
        category: "Announcement"
      }, ...posts]);
      setNewPost("");
    }
  };

  const experts = [
    { 
      name: "Coach Mike", 
      specialty: "Mental Resilience", 
      img: "/images/mike.png",
      availability: "Available Now",
      rating: 4.9
    },
    { 
      name: "Dr. Carter", 
      specialty: "Sports Psychology", 
      img: "/images/carter.png",
      availability: "Next Available: 2pm",
      rating: 4.8
    },
    { 
      name: "Anna Lee", 
      specialty: "Career Transition Coach", 
      img: "/images/anna.png",
      availability: "Available Now",
      rating: 4.9
    },
    { 
      name: "James Pearce", 
      specialty: "Physical Conditioning", 
      img: "/images/james.png",
      availability: "Next Available: 3pm",
      rating: 4.7
    }
  ];

  const leaderboard = [
    { name: "Chris", points: 120, level: "Gold", achievements: 8 },
    { name: "Sam", points: 95, level: "Silver", achievements: 6 },
    { name: "Alex", points: 80, level: "Silver", achievements: 5 },
    { name: "Jordan", points: 65, level: "Bronze", achievements: 4 },
    { name: "Taylor", points: 50, level: "Bronze", achievements: 3 }
  ];

  const stories = [
    { 
      title: "How I Restarted My Career", 
      description: "Tom shares how he overcame setbacks and found new opportunities in sports management.",
      img: "/images/tom.png",
      readTime: "5 min read",
      category: "Career Transition"
    },
    { 
      title: "Overcoming Numerous Setbacks", 
      description: "Mia's story of resilience and finding a new path in coaching after injury and her release fro academy football.",
      img: "/images/mia.png",
      readTime: "4 min read",
      category: "Personal Growth"
    },
    { 
      title: "From Academy to Semi-Pro Football", 
      description: "Alex shares his journey from being released to signing a new contract at a non-league club.",
      img: "/images/alex.png",
      readTime: "6 min read",
      category: "Success Story"
    },
    {
      title: "Finding a New Purpose",
      description: "David's inspiring journey from professional player to youth development coach.",
      img: "/images/david.png",
      readTime: "7 min read",
      category: "Career Transition"
    },
    {
      title: "The Power of Education",
      description: "Sarah's story of balancing football with university studies and career planning.",
      img: "/images/sarah.png",
      readTime: "5 min read",
      category: "Education"
    },
    {
      title: "Building Businesses",
      description: "James shares how he turned his passion for sports into successful businesses.",
      img: "/images/james.png",
      readTime: "6 min read",
      category: "Entrepreneurship"
    }
  ];

  const networkingPosts = [
    {
      id: 1,
      author: "Alex Thompson",
      content: "Looking to connect with former players who transitioned into sports management. Any advice?",
      date: "2024-03-15",
      comments: 12,
      likes: 24,
      nextMeeting: "2024-03-20 14:00"
    },
    {
      id: 2,
      author: "Maria Garcia",
      content: "Just completed my coaching certification! Would love to share my experience with others considering this path.",
      date: "2024-03-14",
      comments: 8,
      likes: 18,
      nextMeeting: "2024-03-22 16:00"
    },
    {
      id: 3,
      author: "James Wilson",
      content: "Starting a sports consultancy business. Looking for partners with experience in youth development programs.",
      date: "2024-03-13",
      comments: 15,
      likes: 32,
      nextMeeting: "2024-03-21 11:00"
    },
    {
      id: 4,
      author: "Sarah Chen",
      content: "Interested in sports psychology? Join our weekly discussion group on mental resilience in sports careers.",
      date: "2024-03-12",
      comments: 20,
      likes: 45,
      nextMeeting: "2024-03-19 15:30"
    },
    {
      id: 5,
      author: "David Martinez",
      content: "Launching a podcast about life after football. Looking for guests to share their transition stories.",
      date: "2024-03-11",
      comments: 25,
      likes: 50,
      nextMeeting: "2024-03-18 13:00"
    },
    {
      id: 6,
      author: "Emma Thompson",
      content: "Organizing a virtual workshop on financial planning for athletes. Experts and former players welcome to join!",
      date: "2024-03-10",
      comments: 30,
      likes: 65,
      nextMeeting: "2024-03-17 10:00"
    }
  ];

  const handleDiscussionPost = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: discussionPosts.length + 1,
        author: "You",
        content: newPost,
        timestamp: "Just now",
        replies: 0,
        likes: 0
      };
      setDiscussionPosts([post, ...discussionPosts]);
      setNewPost('');
    }
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <h1>Community Hub</h1>
        <div className="community-tabs">
          <button 
            className={`tab-btn ${activeTab === 'networking' ? 'active' : ''}`}
            onClick={() => setActiveTab('networking')}
          >
            Networking Lounge
          </button>
          <button 
            className={`tab-btn ${activeTab === 'challenges' ? 'active' : ''}`}
            onClick={() => setActiveTab('challenges')}
          >
            Challenges & Competitions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'stories' ? 'active' : ''}`}
            onClick={() => setActiveTab('stories')}
          >
            Success Stories
          </button>
          <button 
            className={`tab-btn ${activeTab === 'discussion' ? 'active' : ''}`}
            onClick={() => setActiveTab('discussion')}
          >
            Discussion Forum
          </button>
        </div>
      </div>

      <div className="community-content">
        {activeTab === 'networking' && (
          <div className="networking-section">
            <div className="posts-grid">
              {networkingPosts.map(post => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <h3>{post.author}</h3>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <p className="post-content">{post.content}</p>
                  <div className="post-meta">
                    <span>{post.comments} comments</span>
                    <span>{post.likes} likes</span>
                  </div>
                  <div className="next-meeting">
                    <span>Next Meeting: {post.nextMeeting}</span>
                    <button className="join-btn">Join Meeting</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="challenges-section">
            <div className="challenges-grid">
              {challenges.map(challenge => (
                <div key={challenge.id} className="challenge-card">
                  <div className="challenge-header">
                    <h3>{challenge.title}</h3>
                    <span className="deadline">Deadline: {challenge.deadline}</span>
                  </div>
                  <p className="challenge-description">{challenge.description}</p>
                  <div className="challenge-stats">
                    <span>{challenge.participants} participants</span>
                  </div>
                  <div className="leaderboard">
                    <h4>Top Performers</h4>
                    <div className="leaderboard-list">
                      {challenge.leaderboard.map((entry, index) => (
                        <div key={index} className="leaderboard-entry">
                          <span className="rank">{index + 1}</span>
                          <span className="name">{entry.name}</span>
                          <span className="score">{entry.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="join-challenge-btn">Join Challenge</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="stories-section">
            <div className="stories-grid">
              {stories.map(story => (
                <div key={story.id} className="story-card">
                  <div className="story-header">
                    <h3>{story.title}</h3>
                    <span className="story-category">{story.category}</span>
                  </div>
                  <div className="story-meta">
                    <span className="date">{story.date}</span>
                    <span className="read-time">{story.readTime}</span>
                  </div>
                  <p className="story-excerpt">{story.description}</p>
                  <button className="read-more-btn">Read Full Story</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'discussion' && (
          <div className="discussion-section">
            <form onSubmit={handleDiscussionPost} className="discussion-form">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your thoughts or ask a question..."
                className="discussion-input"
              />
              <button type="submit" className="post-btn">Post</button>
            </form>
            <div className="discussion-posts">
              {discussionPosts.map(post => (
                <div key={post.id} className="discussion-post">
                  <div className="post-header">
                    <h3>{post.author}</h3>
                    <span className="timestamp">{post.timestamp}</span>
                  </div>
                  <p className="post-content">{post.content}</p>
                  <div className="post-actions">
                    <button className="action-btn">Reply</button>
                    <button className="action-btn">Like ({post.likes})</button>
                    <span className="replies">{post.replies} replies</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;

