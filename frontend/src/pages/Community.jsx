import React from 'react';
import Navbar from '../components/navbar';

const CommunityTab = () => {
  const posts = [
    {
      id: 1,
      user: 'Rishi Jha',
      avatar: '/avatar.png',
      time: '2 hours ago',
      content: 'Just reached the summit of Mount Fuji! The view is absolutely breathtaking. Highly recommend the sunrise hike. 🏔️✨',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      user: 'Elena Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      time: '5 hours ago',
      content: 'Exploring the hidden cafes of Kyoto. This place has the best Matcha I have ever tasted! 🍵🇯🇵 #TravelJapan #Foodie',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', // Reusing a nice Japan image or similar
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      user: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      time: 'Yesterday',
      content: 'Paris at night is a different kind of magic. 🗼✨ The Eiffel Tower sparkle never gets old.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      likes: 256,
      comments: 42
    }
  ];

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', padding: '40px 20px' }}>
      {/* Background Animated Blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="signup-card" style={{ maxWidth: '800px', width: '95%', textAlign: 'left' }}>
        
        {/* Navbar Component */}
        <Navbar />

        {/* Create Post Area */}
        <div style={createPostStyle}>
          <div style={{ ...avatarStyle, width: '45px', height: '45px', marginTop: 0 }}>
            <img src="/avatar.png" alt="You" style={avatarImgStyle} />
          </div>
          <input 
            type="text" 
            placeholder="Share your latest adventure..." 
            style={{ ...searchFieldStyle, flex: 1, marginBottom: 0 }} 
          />
          <button className="submit-btn" style={{ width: 'auto', padding: '10px 20px', borderRadius: '12px' }}>Post</button>
        </div>

        {/* Section Header */}
        <div style={sectionHeaderStyle}>
          <span style={{ paddingRight: '15px', whiteSpace: 'nowrap' }}>Travel Feed</span>
          <div style={lineStyle}></div>
        </div>

        {/* Feed List */}
        <div style={feedContainerStyle}>
          {posts.map((post) => (
            <div key={post.id} style={postCardStyle}>
              {/* Post Header */}
              <div style={postHeaderStyle}>
                <div style={avatarStyle}>
                  <img src={post.avatar} alt={post.user} style={avatarImgStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1rem' }}>{post.user}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.time}</p>
                </div>
                <button style={moreButtonStyle}>•••</button>
              </div>

              {/* Post Content */}
              <div style={postContentStyle}>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '15px' }}>
                  {post.content}
                </p>
                {post.image && (
                  <div style={postImageContainerStyle}>
                    <img src={post.image} alt="Post content" style={postImgStyle} />
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div style={postActionsStyle}>
                <button style={actionButtonStyle}>
                  <span>❤️</span> {post.likes}
                </button>
                <button style={actionButtonStyle}>
                  <span>💬</span> {post.comments}
                </button>
                <button style={actionButtonStyle}>
                  <span>🚀</span> Share
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .input-field {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .input-field:hover {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

// Styles
const createPostStyle = {
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.03)',
  padding: '20px',
  borderRadius: '20px',
  marginBottom: '40px',
  border: '1px solid var(--glass-border)'
};

const searchFieldStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: 'white',
  outline: 'none'
};

const sectionHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
  color: 'var(--text-main)',
  fontSize: '1.2rem',
  fontWeight: '600'
};

const lineStyle = {
  height: '1px',
  flex: 1,
  background: 'linear-gradient(to right, var(--glass-border), transparent)'
};

const feedContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px'
};

const postCardStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--glass-border)',
  borderRadius: '24px',
  padding: '25px',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(10px)'
};

const postHeaderStyle = {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  marginBottom: '20px'
};

const avatarStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  border: '2px solid var(--primary)',
  overflow: 'hidden',
  flexShrink: 0
};

const avatarImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const moreButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'var(--text-muted)',
  cursor: 'pointer',
  fontSize: '1.2rem'
};

const postContentStyle = {
  marginBottom: '20px'
};

const postImageContainerStyle = {
  width: '100%',
  maxHeight: '400px',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid var(--glass-border)'
};

const postImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const postActionsStyle = {
  display: 'flex',
  gap: '20px',
  borderTop: '1px solid var(--glass-border)',
  paddingTop: '15px'
};

const actionButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

export default CommunityTab;