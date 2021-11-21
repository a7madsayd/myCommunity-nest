# Minimum bug reproduction
 -Controllers not mapped
# Setup

1) npm install

# Reproduction

1) npm run start
2) open new browser tab
3) go localhost:3000/api/v1/user/find/all?limit=20&page=1
4) see the error

 # Environment
- Nest: 8.1.5
- Node: v14.16.0
- Platform: Windows 10
