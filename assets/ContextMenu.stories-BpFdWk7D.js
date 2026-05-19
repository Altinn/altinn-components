import{j as t}from"./iframe-CPVbSj3C.js";import{S as b}from"./ArrowRedo-BDsUqgH-.js";import{S as v}from"./EyeClosed-Ck4VoVkj.js";import{S as I}from"./Archive-DoTzijFK.js";import{S as k}from"./Trash-CN9HTNng.js";import{S as w}from"./ClockDashed-CXAa2KHW.js";import{S as l}from"./TeddyBear-0ey-TDkX.js";import{i as u}from"./inboxSearchResults-6__J2ZkP.js";import{C as r}from"./ContextMenu-BpEtaE5j.js";import{L as x}from"./List-B1jbPhNU.js";import{L as d}from"./ListItem-PZZV2dBV.js";import{D as g}from"./DialogListItem-DX-ReoQN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CeU55pH0.js";import"./dialogs-47gdYD5U.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-_1bUltTE.js";import"./AttachmentList-w5QHjzo9.js";import"./AttachmentLink-0okKb4st.js";import"./Icon-DFTXBWnL.js";import"./index-B-yq3MoC.js";import"./Skeleton-O-y9i0gG.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Section-D88C7V2M.js";import"./Flex-DcepQHCt.js";import"./Heading-Bxz0tryo.js";import"./useHighlightedText-cpJ8B6bV.js";import"./TransmissionList-CrxGDhtC.js";import"./Transmission-DPUo5myC.js";import"./Typography-CiUpHFvi.js";import"./SeenByLog-Djjmi6mZ.js";import"./SeenByLogButton-C2issPP9.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Avatar-Ctx52zko.js";import"./SeenByLogItem-CIWxVTB-.js";import"./Byline-CrbieoFv.js";import"./Divider-Cu80_GWO.js";import"./DialogActions-CXH7ZxoN.js";import"./ButtonGroupDivider-DGgAQ05Q.js";import"./ChevronUp-26jjNeZQ.js";import"./ChevronDown-Dne2Ro5q.js";import"./DropdownBase-DO59E-wv.js";import"./useClickOutside-CxlpTw27.js";import"./ButtonGroup-Cm_Y-nHl.js";import"./SearchField-B-nnAALe.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./XMark-DWjKCZtX.js";import"./FieldBase-COzHnWja.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Checkmark-D2vzhSBC.js";import"./ItemControls-DA5Yy7AS.js";import"./ChevronRight-D8cN60Uo.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-D8Yozs_o.js";import"./Dropdown-CWKVFS9V.js";import"./MenuElipsisHorizontal-2MdITEPY.js";import"./ItemLink-C2_R4otY.js";import"./DialogByline-BU3eQDla.js";import"./DialogMetadata-VxIVgIJe.js";import"./DialogStatus-CO6PZLGQ.js";import"./MetaItem-CLv7QPro.js";import"./ProgressIcon-CRfv3j6m.js";import"./Paperclip-CBI79N46.js";import"./Files-C6c0nfuQ.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
