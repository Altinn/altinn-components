import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-CpyhhMkF.js";import{t as r}from"./jsx-runtime-DwqL_Y-t.js";import{t as i}from"./DialogHistoryItem-B019Jl3r.js";import{t as a}from"./SeenByLog-B-uDDjpD.js";import{t as o}from"./TransmissionList-CPKKEZqi.js";import{t as s}from"./transmissions-BTYH87Aq.js";import{n as c}from"./seenByLog-pH6EgWDf.js";var l=t({Default:()=>p,MultipleActivities:()=>g,Transmissions:()=>m,TransmissionsUnread:()=>h,__namedExportsOrder:()=>_,default:()=>f}),u=e(n(),1),d=r(),f={title:`Inbox/Dialog/DialogHistory`,component:i,tags:[`beta`,`skip-test`],parameters:{},args:{expandLabel:`Vis flere detaljer`,collapseLabel:`Skjul detajer`}},p={args:{items:[{id:`1`,byline:`I dag kl 12:00`,datetime:`2023-10-01T12:00:00Z`,summary:`Dialogen ble opprettet.`}]}},m={args:{items:[{id:`3`,children:(0,d.jsx)(o,{items:[s[1],s[2]]})},{id:`2`,children:(0,d.jsx)(o,{items:[s[1],s[0]]})},{id:`3`,children:(0,d.jsx)(o,{items:[s[1],s[2]]})},{id:`4`,children:(0,d.jsx)(o,{items:[s[1],s[0]]})},{id:`5`,children:(0,d.jsx)(o,{items:[s[1],s[2]]})},{id:`6`,children:(0,d.jsx)(o,{items:[s[1],s[0]]})}],maxItems:2}},h=()=>{let[e,t]=(0,u.useState)([]),n=({id:e,children:n})=>((0,u.useEffect)(()=>{t(t=>[...t,e])},[e]),n),r=[s[1],s[0],s[1],s[0],s[1],s[0]].map((t,r)=>{let i=`t`+r;return{...t,unread:t.unread&&!e.includes(i),children:(0,d.jsx)(n,{id:i,children:(0,d.jsx)(`p`,{children:`Åpnet`})}),id:i}});return(0,d.jsx)(i,{items:[{id:`3`,unread:r[0].unread,children:(0,d.jsx)(o,{items:[r[0],r[1]]})},{id:`2`,unread:r[2].unread,children:(0,d.jsx)(o,{items:[r[2],r[3]]})},{id:`3`,unread:r[4].unread,children:(0,d.jsx)(o,{items:[r[4],r[5]]})}]})},g={args:{items:[{byline:`I dag kl 12:00`,datetime:`2023-10-01T12:00:00Z`,summary:`Dialogen ble slettet.`},{id:`1`,items:[{byline:`I dag kl 12:00`,datetime:`2023-10-01T12:00:00Z`,summary:`Dialogen ble slettet.`},{children:(0,d.jsx)(o,{items:[s[1],s[2]]})},{byline:`Kl 10:00`,datetime:`2023-10-01T12:00:00Z`,summary:`Dialogen ble opprettet.`},{children:(0,d.jsx)(a,{...c})}]},{byline:`I dag kl 12:00`,datetime:`2023-10-01T12:00:00Z`,summary:`Dialogen ble opprettet.`}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      byline: 'I dag kl 12:00',
      datetime: '2023-10-01T12:00:00Z',
      summary: 'Dialogen ble opprettet.'
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '3',
      children: <TransmissionList items={[transmissions[1], transmissions[2]]} />
    }, {
      id: '2',
      children: <TransmissionList items={[transmissions[1], transmissions[0]]} />
    }, {
      id: '3',
      children: <TransmissionList items={[transmissions[1], transmissions[2]]} />
    }, {
      id: '4',
      children: <TransmissionList items={[transmissions[1], transmissions[0]]} />
    }, {
      id: '5',
      children: <TransmissionList items={[transmissions[1], transmissions[2]]} />
    }, {
      id: '6',
      children: <TransmissionList items={[transmissions[1], transmissions[0]]} />
    }],
    maxItems: 2
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [read, setRead] = useState<string[]>([]);
  const RenderChild = ({
    id,
    children
  }: {
    id: string;
    children?: React.ReactNode;
  }) => {
    useEffect(() => {
      setRead(prev => [...prev, id]);
    }, [id]);
    return children;
  };
  const list = [transmissions[1], transmissions[0], transmissions[1], transmissions[0], transmissions[1], transmissions[0]].map((item, index) => {
    const id = 't' + index;
    return {
      ...item,
      unread: item.unread && !read.includes(id),
      children: <RenderChild id={id}>
          <p>Åpnet</p>
        </RenderChild>,
      id
    };
  });
  const items = [{
    id: '3',
    unread: list[0].unread,
    children: <TransmissionList items={[list[0], list[1]]} />
  }, {
    id: '2',
    unread: list[2].unread,
    children: <TransmissionList items={[list[2], list[3]]} />
  }, {
    id: '3',
    unread: list[4].unread,
    children: <TransmissionList items={[list[4], list[5]]} />
  }];
  return <DialogHistory items={items} />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      byline: 'I dag kl 12:00',
      datetime: '2023-10-01T12:00:00Z',
      summary: 'Dialogen ble slettet.'
    }, {
      id: '1',
      items: [{
        byline: 'I dag kl 12:00',
        datetime: '2023-10-01T12:00:00Z',
        summary: 'Dialogen ble slettet.'
      }, {
        children: <TransmissionList items={[transmissions[1], transmissions[2]]} />
      }, {
        byline: 'Kl 10:00',
        datetime: '2023-10-01T12:00:00Z',
        summary: 'Dialogen ble opprettet.'
      }, {
        children: <SeenByLog {...seenByLog} />
      }]
    }, {
      byline: 'I dag kl 12:00',
      datetime: '2023-10-01T12:00:00Z',
      summary: 'Dialogen ble opprettet.'
    }]
  }
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Transmissions`,`TransmissionsUnread`,`MultipleActivities`];export{p as Default,g as MultipleActivities,m as Transmissions,h as TransmissionsUnread,_ as __namedExportsOrder,f as default,l as t};