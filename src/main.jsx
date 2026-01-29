import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 

// 🛡️ 错误捕捉组件 (Error Boundary)
// 如果页面报错，它会直接把错误显示在屏幕上，而不是白屏
class ErrorBoundary extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = { hasError: false, error: null }; 
  }

  static getDerivedStateFromError(error) { 
    return { hasError: true, error }; 
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#dc2626', fontFamily: 'sans-serif', lineHeight: '1.5' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>⚠️ 网站运行出错了</h1>
          <div style={{ background: '#fee2e2', padding: '20px', borderRadius: '8px', border: '1px solid #fca5a5' }}>
            <p style={{ fontWeight: 'bold' }}>错误信息：</p>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{this.state.error.toString()}</pre>
          </div>
          <div style={{ marginTop: '20px', color: '#333' }}>
            <p><strong>💡 常见解决方法：</strong></p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>如果是 <code>Failed to resolve module 'lucide-react'</code> <br/>👉 请在终端运行：<code>npm install lucide-react</code></li>
              <li>如果是 <code>Failed to resolve module 'tailwindcss'</code> <br/>👉 请在终端运行：<code>npm install -D tailwindcss postcss autoprefixer</code></li>
            </ul>
          </div>
        </div>
      );
    }
    return this.props.children; 
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)