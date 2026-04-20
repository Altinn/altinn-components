import{j as n,r as c}from"./iframe-CULgtZWU.js";import{t as s}from"./transmissions-ogUXkOXI.js";import{s as T}from"./seenByLog-A816RdIE.js";import{D as u}from"./DialogHistoryItem-Dbe61p8D.js";import{T as e}from"./TransmissionList-DfWxxHbn.js";import{S as b}from"./SeenByLog-D8x_GpFv.js";const x={title:"Inbox/Dialog/DialogHistory",component:u,tags:["beta","skip-test"],parameters:{},args:{expandLabel:"Vis flere detaljer",collapseLabel:"Skjul detajer"}},a={args:{items:[{id:"1",byline:"I dag kl 12:00",datetime:"2023-10-01T12:00:00Z",summary:"Dialogen ble opprettet."}]}},m={args:{items:[{id:"3",children:n.jsx(e,{items:[s[1],s[2]]})},{id:"2",children:n.jsx(e,{items:[s[1],s[0]]})},{id:"3",children:n.jsx(e,{items:[s[1],s[2]]})},{id:"4",children:n.jsx(e,{items:[s[1],s[0]]})},{id:"5",children:n.jsx(e,{items:[s[1],s[2]]})},{id:"6",children:n.jsx(e,{items:[s[1],s[0]]})}],maxItems:2}},o=()=>{const[p,g]=c.useState([]),h=({id:t,children:l})=>(c.useEffect(()=>{g(r=>[...r,t])},[t]),l),i=[s[1],s[0],s[1],s[0],s[1],s[0]].map((t,l)=>{const r="t"+l;return{...t,unread:t.unread&&!p.includes(r),children:n.jsx(h,{id:r,children:n.jsx("p",{children:"Åpnet"})}),id:r}}),y=[{id:"3",unread:i[0].unread,children:n.jsx(e,{items:[i[0],i[1]]})},{id:"2",unread:i[2].unread,children:n.jsx(e,{items:[i[2],i[3]]})},{id:"3",unread:i[4].unread,children:n.jsx(e,{items:[i[4],i[5]]})}];return n.jsx(u,{items:y})},d={args:{items:[{byline:"I dag kl 12:00",datetime:"2023-10-01T12:00:00Z",summary:"Dialogen ble slettet."},{id:"1",items:[{byline:"I dag kl 12:00",datetime:"2023-10-01T12:00:00Z",summary:"Dialogen ble slettet."},{children:n.jsx(e,{items:[s[1],s[2]]})},{byline:"Kl 10:00",datetime:"2023-10-01T12:00:00Z",summary:"Dialogen ble opprettet."},{children:n.jsx(b,{...T})}]},{byline:"I dag kl 12:00",datetime:"2023-10-01T12:00:00Z",summary:"Dialogen ble opprettet."}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      byline: 'I dag kl 12:00',
      datetime: '2023-10-01T12:00:00Z',
      summary: 'Dialogen ble opprettet.'
    }]
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const j=["Default","Transmissions","TransmissionsUnread","MultipleActivities"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:a,MultipleActivities:d,Transmissions:m,TransmissionsUnread:o,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,m as T,R as a};
