var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-B3JK86DP.js";import{S as I}from"./ArrowRedo-j7AV3Lkz.js";import{S as k}from"./EyeClosed-CW-Sgj_3.js";import{S as w}from"./Archive-DGM3iS45.js";import{S as B}from"./Trash-XyOTEtSX.js";import{S as D}from"./ClockDashed-DDD5Czsn.js";import{C as a}from"./ContextMenu-B2Ts5CPe.js";import{i as u}from"./inboxSearchResults-CnzJwALg.js";import{S as d}from"./TeddyBear-B19pHLs0.js";import{L as h}from"./List-CJlE7g3l.js";import{D as g}from"./DialogListItem-za8JYRBU.js";import{L as y}from"./ListItem-B6hmde0j.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DrRN5BOH.js";import"./Dropdown-D-XZVyts.js";import"./SearchField-CYbBjrsH.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemMedia-w7Ibrgnv.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./ItemLabel-UJIDw8s4.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./ItemControls-EPopScKo.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./ChevronRight-CXXN68ww.js";import"./FieldBase-BOLpoc-t.js";import"./Typography-AZ3lf-vT.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./useMenu-RTLBsPgV.js";import"./InformationSquare-DD61y5yY.js";import"./dialogs-CrUOzjeT.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Dt18uPUN.js";import"./AttachmentList-CxWoW9Hp.js";import"./File-mL9hGOwB.js";import"./Section-DBrjPmQz.js";import"./Flex-DTtFl6cz.js";import"./TransmissionList-C-IwQg0n.js";import"./Transmission-CLpWKH_J.js";import"./SeenByLog-BWYlhPUP.js";import"./SeenByLogItem-glJ9iie7.js";import"./Byline-Ci-3RfFp.js";import"./SeenByLogButton-DlSNKPv6.js";import"./Divider-C4aAfbp2.js";import"./DialogActions-DUEYhQWZ.js";import"./ButtonGroup-svkpHY7L.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CVpq_C38.js";import"./ItemLink-CI8JhxFv.js";import"./DialogByline-CZJrCGQh.js";import"./DialogMetadata-D7K9eAiQ.js";import"./DialogStatus-BGbPZBqs.js";import"./Paperclip-BHkWG0jL.js";import"./Files-w7zPJCQV.js";import"./Checkmark-BlaG2503.js";import"./MetaBase-CNQLa5UP.js";import"./MetaItem-DsAFXoga.js";import"./ProgressIcon-C99sZYGl.js";import"./ChevronUp-2E8wLm1d.js";import"./ChevronDown-eXgBXwsS.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,zt as __namedExportsOrder,Yt as default};
