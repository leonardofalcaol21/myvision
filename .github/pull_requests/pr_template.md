## 🔭 MyVision — Projeto Base Frontend

Este PR introduz toda a estrutura inicial do frontend da plataforma **MyVision**, uma aplicação de indicadores e dashboards estratégicos.

---

### 📦 Stack utilizada
| Tecnologia | Versão |
|---|---|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Ant Design | 5 |
| ECharts (echarts-for-react) | 5 |
| React Router | 6 |
| Axios | 1.6 |

---

### 🗂 Estrutura de arquivos

```
frontend/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── types/index.ts
    ├── services/api.ts
    ├── context/AuthContext.tsx
    ├── routes/AppRoutes.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Sidebar.tsx
    │   │   └── PrivateRoute.tsx
    │   ├── kpi/
    │   │   └── KpiCard.tsx
    │   └── charts/
    │       ├── BarChart.tsx
    │       ├── LineChart.tsx
    │       └── GaugeChart.tsx
    └── pages/
        ├── Login.tsx
        ├── Dashboard.tsx
        ├── AdminPanel.tsx
        └── NotFound.tsx
```

---

### ✨ Funcionalidades incluídas

- **Autenticação** com JWT (contexto global, interceptor Axios, persistência no localStorage)
- **Roteamento** protegido com PrivateRoute e controle por perfil (admin, manager, operator, client)
- **Layout** responsivo com Sidebar colapsável e Header com menu do usuário
- **Dashboard** com:
  - 4 cards KPI com variação percentual em relação ao mês anterior
  - Gráfico de linha — evolução de receita (2024 vs 2025)
  - Gauge — % de meta atingida
  - 2 gráficos de barras — vendas por canal e clientes por região
- **Painel Admin** com tabela de usuários, perfis e ações (editar/remover)
- Página 404 amigável

---

### 🚀 Como rodar localmente

```bash
cd frontend
npm install
npm run dev
# Acesse http://localhost:3000
```

> Credenciais de demonstração: `admin@myvision.com` / `admin123`