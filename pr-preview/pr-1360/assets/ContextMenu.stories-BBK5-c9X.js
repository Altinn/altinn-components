import{a7 as t}from"./iframe-BRgClhpr.js";import{S as b}from"./ArrowRedo-BnoU49mh.js";import{S as v}from"./EyeClosed-BEEF2yNA.js";import{S as I}from"./Archive-D_ouN-S2.js";import{S as k}from"./Trash-Dik4P95g.js";import{S as w}from"./ClockDashed-CWknIAj4.js";import{C as n}from"./ContextMenu-BusqlWA9.js";import{i as l}from"./inboxSearchResults-DoUueSJk.js";import{S as u}from"./TeddyBear-1obe2pe3.js";import{L as x}from"./List-V6__rx0O.js";import{D as d}from"./DialogListItem-CU-SBQjj.js";import{L as g}from"./ListItem-CPBMHy8j.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CFHgccGy.js";import"./Dropdown-DgbN3_NI.js";import"./SearchField--IrWsBEa.js";import"./MagnifyingGlass-DQctf2To.js";import"./FieldBase-D8LAV1W4.js";import"./Typography-BKJ9hmvo.js";import"./useHighlightedText-DTOSK592.js";import"./Field-DqCTTwOm.js";import"./Label-BrO-Curr.js";import"./Input-C7r6_Ftd.js";import"./useMenu-C_5VwfPF.js";import"./MenuListItem-rBdScGXY.js";import"./MenuListDivider-DSrBiGuI.js";import"./MenuListHeading-BqZAg_LU.js";import"./MenuItem-jszC7nZR.js";import"./ItemMedia-DpaVUI33.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Checkmark-CT8uSN89.js";import"./ItemLabel-CvYCQ28O.js";import"./Heading-D9ujzuNV.js";import"./ItemControls-WDxokqHy.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./ChevronRight-BLIKQh_h.js";import"./InformationSquare-DK9XnxPK.js";import"./MenuElipsisHorizontal-CzndoW4V.js";import"./dialogs-iXq7_puw.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-fgxqSOKd.js";import"./AttachmentList-Brr1hIcP.js";import"./AttachmentLink-C9j1Ncz8.js";import"./File-CxaIoRua.js";import"./Section-vNolLCey.js";import"./Flex-A0QnVpm8.js";import"./TransmissionList-DmAreexx.js";import"./Transmission-BrQmCkgF.js";import"./SeenByLog-Dkv84S76.js";import"./SeenByLogItem-WZUsi45t.js";import"./Byline-D_KBo-zr.js";import"./SeenByLogButton-DD2GS_-6.js";import"./Divider-CxkA-0zz.js";import"./DialogActions-CfmdudWa.js";import"./ButtonGroupDivider-DmROwXvK.js";import"./ChevronUp-D-x3gjGi.js";import"./ChevronDown-B8Xryl2N.js";import"./DropdownBase-BuKihAMj.js";import"./useClickOutside-CkMgDKw3.js";import"./ButtonGroup-Ce1vy6GX.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-D-9VP-93.js";import"./ItemLink-eV9BuEU9.js";import"./DialogByline-CeVkw0jb.js";import"./DialogMetadata-bglDPkPQ.js";import"./DialogStatus-CFdg_h47.js";import"./Paperclip-CJIZduPz.js";import"./Files-DWqq15Ev.js";import"./MetaBase-CoaqoSZF.js";import"./MetaItem-BpKFv0TR.js";import"./ProgressIcon-DLQZCyLQ.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
