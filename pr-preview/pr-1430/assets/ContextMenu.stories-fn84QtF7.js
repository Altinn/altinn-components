var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-Bv9y2YZF.js";import{S as I}from"./ArrowRedo-CzeRLma4.js";import{S as k}from"./EyeClosed-CYM8YpP6.js";import{S as w}from"./Archive-BZe-TlAS.js";import{S as B}from"./Trash-D9cqJvdS.js";import{S as D}from"./ClockDashed-OPx8LfHd.js";import{C as a}from"./ContextMenu-Bv-yi6hM.js";import{i as u}from"./inboxSearchResults-csmAnXJT.js";import{S as d}from"./TeddyBear-BKXydhEi.js";import{L as h}from"./List-BC0AOX2B.js";import{D as g}from"./DialogListItem-DD1p95Ut.js";import{L as y}from"./ListItem-C6mw7NGu.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-BYwkMXkD.js";import"./Dropdown-DQyu8KYK.js";import"./SearchField-Bk5qe-oT.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./FieldBase-qKDj-2_C.js";import"./Typography-AZvc429m.js";import"./useHighlightedText-B3SRW8uR.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./useMenu-B94lF56c.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./Heading-CDZ3_iYV.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronRight-B_ztNHmN.js";import"./InformationSquare-BoyRK6zF.js";import"./MenuElipsisHorizontal-BfbhNlCU.js";import"./dialogs-C-r4Ro6j.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CkDRf3up.js";import"./AttachmentList-Dt35cZvL.js";import"./AttachmentLink-CzXwMzRr.js";import"./File-B_YudXxQ.js";import"./Section-SEwZH98m.js";import"./Flex-k0HwcErc.js";import"./TransmissionList-C9E7RnEO.js";import"./Transmission-CrUcxLlm.js";import"./SeenByLog-Ze4oW-2D.js";import"./SeenByLogItem-DCMbH4r-.js";import"./Byline-jEJeyCgg.js";import"./SeenByLogButton-DPS3aksO.js";import"./Divider-CX9Qmd6L.js";import"./DialogActions-Ctzicxf-.js";import"./ButtonGroup-DFBjPK-b.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DiWDtFEx.js";import"./ItemLink-C-pnxU8M.js";import"./DialogByline-O_7qG_fu.js";import"./DialogMetadata-Njmo4qQc.js";import"./DialogStatus-9LNcL-f4.js";import"./Paperclip-DJXpilAT.js";import"./Files-lfA0uQOC.js";import"./MetaBase-DT2qRG5r.js";import"./MetaItem-CP29LMD1.js";import"./ProgressIcon-B63tZcct.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
