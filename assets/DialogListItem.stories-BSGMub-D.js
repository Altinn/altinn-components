var Q=Object.defineProperty;var o=(r,n)=>Q(r,"name",{value:n,configurable:!0});import{a7 as e,aa as w}from"./iframe-CHdTRX1S.js";import{s as X}from"./skatt-Eb53q4vT.js";import{c as H}from"./contextMenu-LSv-5_cX.js";import{M as J}from"./MetaItem-C-kbC6nG.js";import{L as Y}from"./List-Cx8iXXL1.js";import{s as G}from"./seenByLog-9sbnLyZl.js";import{D as d}from"./DialogListItem-C9vim3EU.js";import{C as K}from"./ContextMenu-D-52UC8M.js";import{I as Z}from"./ListItem-sXsJE6ar.js";const ee=["xl","lg","md","sm","xs"],re={title:"Inbox/DialogListItem",component:d,tags:["autodocsi","beta"],argTypes:{},args:{title:"Title",summary:"Summary",sender:X,recipient:{type:"person",name:"Recipient name"},updatedAt:"2024-11-25 15:30",updatedAtLabel:"25. november 2024 kl. 15.30",tooltips:{updatedAt:"Sist oppdatert"},status:{}},decorators:[r=>{const n={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:n,children:e.jsx(Y,{children:e.jsx(r,{})})})}]},l={args:{}},u={args:{unread:!0}},m={args:{trashedAt:"2024-11-27",trashedAtLabel:"Slettet",unread:!0}},g={args:{unreadItems:!0}},p={args:{archivedAt:"2024-11-27",archivedAtLabel:"Arkivert",unreadItems:!0}},h={args:{seenByLog:{title:"Sett av bruker",items:[{id:"1",name:"John Doe",seenAt:"2024-11-25 15:30",seenAtLabel:"25. november 2024 kl 15.30",isEndUser:!0}]}}},v={args:{seenByLog:G}},b={args:{seenByLog:G,badge:{label:"Uåpnet innhold"}}},A={args:{seenByLog:G,unread:!0}},S={args:{grouped:!0}},s={args:{status:{value:"requires-attention",label:"Krever handling"}}},L={args:{...s.args,dueAt:{datetime:"2025-01-01",label:"Frist: 1. januar 2025"}}},i={args:{status:{value:"in-progress",label:"Under arbeid"}}},a={args:{status:{value:"completed",label:"Avsluttet"}}},c={args:{...a.args,attachmentsCount:2}},f={args:{...c.args,attachmentsLabel:"2 vedlegg"}},C={args:{summary:void 0,recipient:void 0,draftsLabel:"Utkast"}},I={args:{...s.args,draftsLabel:"Utkast"}},y={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert"}},U={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert av deg"}},x={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert 27.11.2024"}},k={args:{...s.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Papirkurv"}},M={args:{...s.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Slettet 27.11.2024"}},T={args:{...s.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Slettet av deg"}},D={args:{...i.args,sentCount:1}},j={args:{...a.args,receivedCount:2}},B={args:{summary:void 0,sentCount:2,receivedCount:3}},R={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,receivedCount:2,tooltips:{updatedAt:"Sist oppdatert",sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",activityLog:"Åpne aktivitetslogg"}}},P={args:{loading:!0}},q={args:{title:"Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."}},N={args:{summary:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.

Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.`}},E=o(r=>{const[n,V]=w.useState({1:{id:"1",title:"Item 1",selected:!0},2:{id:"2",title:"Item 2",selected:!1},3:{id:"3",title:"Item 2",selected:!1}}),$=o(({id:t})=>{V(O=>({...O,[t]:{...O[t],selected:!O[t].selected}}))},"onSelect");return Object.values(n)?.map(t=>e.jsxs(w.Fragment,{children:[e.jsx(d,{...r,title:t.title,selected:t.selected,controls:e.jsx(Z,{onChange:o(()=>$(t),"onChange"),checked:t?.selected,"aria-label":t.id})}),e.jsxs(J,{as:"li",children:["selected:",t.selected?"true":"false"]})]},t?.id))},"Selectable"),z=o(r=>ee?.map(n=>e.jsxs(w.Fragment,{children:[e.jsx(d,{...r,size:n,status:{value:"in-progress",label:"Under arbeid"}}),e.jsx(J,{as:"li",children:n})]},n)),"Sizes"),F=o(r=>e.jsx(d,{...r,status:{value:"in-progress",label:"Under arbeid"},ariaLabel:"Title",as:"a",href:"//vg.no"}),"AsLink"),W=o(r=>e.jsx(d,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(K,{...H}),ariaLabel:"Title",as:"a",href:"//vg.no"}),"CustomControls"),_=o(r=>e.jsx(d,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(K,{...H}),title:"Title with highlighted text",summary:"Summary with highlighted text",highlightWords:["title","highlight"],ariaLabel:"Title",as:"a",href:"//vg.no"}),"HighlightWords");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    unread: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet',
    unread: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    unreadItems: true
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert',
    unreadItems: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog: {
      title: 'Sett av bruker',
      items: [{
        id: '1',
        name: 'John Doe',
        seenAt: '2024-11-25 15:30',
        seenAtLabel: '25. november 2024 kl 15.30',
        isEndUser: true
      }]
    }
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    badge: {
      label: 'Uåpnet innhold'
    }
  }
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    unread: true
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    grouped: true
  }
}`,...S.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    }
  }
}`,...s.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    dueAt: {
      datetime: '2025-01-01',
      label: 'Frist: 1. januar 2025'
    }
  }
}`,...L.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    attachmentsCount: 2
  }
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...AttachmentsCount.args,
    attachmentsLabel: '2 vedlegg'
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    recipient: undefined,
    draftsLabel: 'Utkast'
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    draftsLabel: 'Utkast'
  }
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert'
  }
}`,...y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert av deg'
  }
}`,...U.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert 27.11.2024'
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Papirkurv'
  }
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet 27.11.2024'
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet av deg'
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...InProgress.args,
    sentCount: 1
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    receivedCount: 2
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    sentCount: 2,
    receivedCount: 3
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    receivedCount: 2,
    tooltips: {
      updatedAt: 'Sist oppdatert',
      sent: 'Sendte meldinger',
      received: 'Meldinger mottatt',
      attachments: 'Vedlegg',
      activityLog: 'Åpne aktivitetslogg'
    }
  }
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\\n\\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  const [items, setItems] = useState<Record<string, SelectableItem>>({
    '1': {
      id: '1',
      title: 'Item 1',
      selected: true
    },
    '2': {
      id: '2',
      title: 'Item 2',
      selected: false
    },
    '3': {
      id: '3',
      title: 'Item 2',
      selected: false
    }
  });
  const onSelect = ({
    id
  }: {
    id: string;
  }) => {
    setItems((prevState: Record<string, SelectableItem>) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          selected: !prevState[id].selected
        }
      };
    });
  };
  return Object.values(items)?.map(item => {
    return <Fragment key={item?.id}>
        <DialogListItem {...args} title={item.title} selected={item.selected} controls={<ItemSelect onChange={() => onSelect(item)} checked={item?.selected} aria-label={item.id} />} />
        <MetaItem as={'li'}>selected:{item.selected ? 'true' : 'false'}</MetaItem>
      </Fragment>;
  });
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return sizes?.map(size => {
    return <Fragment key={size}>
        <DialogListItem {...args} size={size} status={{
        value: 'in-progress',
        label: 'Under arbeid'
      }} />

        <MetaItem as={'li'}>{size}</MetaItem>
      </Fragment>;
  });
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} title="Title with highlighted text" summary="Summary with highlighted text" highlightWords={['title', 'highlight']} ariaLabel="Title" as="a" href="//vg.no" />;
}`,..._.parameters?.docs?.source}}};const te=["Default","Unread","UnreadTrashed","UnreadItems","UnreadItemsArchived","SeenByEndUser","SeenByMultiple","UnopenedContent","MarkedAsUnread","GroupedAvatars","RequiresAttention","DueAt","InProgress","Completed","AttachmentsCount","AttachmentsLabel","Draft","DraftAndStatus","Archived","ArchivedBy","ArchivedAt","Trashed","TrashedAt","TrashedBy","SentCount","ReceivedCount","Transmissions","WithTooltips","Loading","LongTitle","LongSummary","Selectable","Sizes","AsLink","CustomControls","HighlightWords"],ge=Object.freeze(Object.defineProperty({__proto__:null,Archived:y,ArchivedAt:x,ArchivedBy:U,AsLink:F,AttachmentsCount:c,AttachmentsLabel:f,Completed:a,CustomControls:W,Default:l,Draft:C,DraftAndStatus:I,DueAt:L,GroupedAvatars:S,HighlightWords:_,InProgress:i,Loading:P,LongSummary:N,LongTitle:q,MarkedAsUnread:A,ReceivedCount:j,RequiresAttention:s,SeenByEndUser:h,SeenByMultiple:v,Selectable:E,SentCount:D,Sizes:z,Transmissions:B,Trashed:k,TrashedAt:M,TrashedBy:T,UnopenedContent:b,Unread:u,UnreadItems:g,UnreadItemsArchived:p,UnreadTrashed:m,WithTooltips:R,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{y as A,a as C,l as D,S as G,i as I,A as M,j as R,h as S,B as T,b as U,ge as a,C as b,I as c,s as d,v as e,D as f,k as g,u as h};
