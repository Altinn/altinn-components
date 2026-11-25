var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-CZm9Z2L_.js";import{S as I}from"./ArrowRedo-B90yH3T_.js";import{S as k}from"./EyeClosed-CeZibFb2.js";import{S as w}from"./Archive-BdlwK_O4.js";import{S as B}from"./Trash-D-r-J8J3.js";import{S as D}from"./ClockDashed-Dc2AKOfu.js";import{C as a}from"./ContextMenu-Bv-2X2Z3.js";import{i as u}from"./inboxSearchResults-PIl9O92G.js";import{S as d}from"./TeddyBear-D_-Tswtc.js";import{L as h}from"./List-DQWfOE6F.js";import{D as g}from"./DialogListItem-BNivfyDa.js";import{L as y}from"./ListItem-DzMq7FBw.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-B7YFssqT.js";import"./Dropdown-CjN8UIhd.js";import"./SearchField-Cj8KK4lS.js";import"./MagnifyingGlass-DwPErScE.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ItemLabel-B3mLAUUV.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronRight-MmDri0bt.js";import"./FieldBase-BiQdP4ez.js";import"./Typography-99BUGcV3.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./useMenu-czaSJY_k.js";import"./InformationSquare-C62nR7w8.js";import"./dialogs-Du10NMWC.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BTeV5a_9.js";import"./AttachmentList-FSNLt8_T.js";import"./File-ClWrilt4.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";import"./TransmissionList-uyomhfGm.js";import"./Transmission-CNhBvy7H.js";import"./SeenByLog-BKrWHMMh.js";import"./SeenByLogItem-daYL6lpq.js";import"./Byline-BnpbJ8kJ.js";import"./SeenByLogButton-BdubtqW0.js";import"./Divider-qPWkBqr9.js";import"./DialogActions-Cuu6PALU.js";import"./ButtonGroup-7aJoGw6J.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CcZPPggP.js";import"./ItemLink-u7oYbdQM.js";import"./DialogByline-6vaV0dxN.js";import"./DialogMetadata-D50nWJ5V.js";import"./DialogStatus-CLdp1BGL.js";import"./Paperclip-B9_X2bPg.js";import"./Files-huj9YJRI.js";import"./Checkmark-CAMmZDSe.js";import"./MetaBase-BsSUm0sI.js";import"./MetaItem-C21zjPe-.js";import"./ProgressIcon-CUKALZBX.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
