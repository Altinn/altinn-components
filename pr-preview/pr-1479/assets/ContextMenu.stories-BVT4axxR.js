var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-CJbVApVd.js";import{S as I}from"./ArrowRedo-Bj8Xi-W5.js";import{S as k}from"./EyeClosed-BDdFQKEm.js";import{S as w}from"./Archive-CfKujgt8.js";import{S as B}from"./Trash-TofRm-_Y.js";import{S as D}from"./ClockDashed-D1H_Un6v.js";import{C as a}from"./ContextMenu-DrorVqxf.js";import{i as u}from"./inboxSearchResults-Be9SKkv9.js";import{S as d}from"./TeddyBear-UfjP_aNr.js";import{L as h}from"./List-DoeIG-YU.js";import{D as g}from"./DialogListItem-D6uUqH13.js";import{L as y}from"./ListItem-DoyXkhoV.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-B6bebHA9.js";import"./Dropdown-F7ryxq5F.js";import"./SearchField-v7apZWbj.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuListDivider-DHbKRw1S.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ItemLabel-BQOKZEUY.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ChevronRight-27VbzC_5.js";import"./FieldBase-DPozPxXp.js";import"./Typography-YiefWcUe.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./useMenu-Le6NyqAV.js";import"./InformationSquare-COAmcV_p.js";import"./dialogs-7pPrfFxn.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CzPXlRHD.js";import"./AttachmentList-D1RwBIgo.js";import"./File-CguZ05Hs.js";import"./Section-senxxBaK.js";import"./Flex-DQBhfYN9.js";import"./TransmissionList-CX6Jk705.js";import"./Transmission-CaCv1TW9.js";import"./SeenByLog-CKvKR-NN.js";import"./SeenByLogItem-BJ46QDV8.js";import"./Byline-DbUQdLmq.js";import"./SeenByLogButton-DsrxYdud.js";import"./Divider-DF26y3y1.js";import"./DialogActions-DvKGeIcK.js";import"./ButtonGroup-Ban15m4A.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CW_AfMRn.js";import"./ItemLink-DxGfrHe_.js";import"./DialogByline-DQvXPT5s.js";import"./DialogMetadata-CaLuZzoE.js";import"./DialogStatus-CxpnMu-X.js";import"./Paperclip-tR5UvI1V.js";import"./Files-CET3WFj6.js";import"./Checkmark-B9iR0FRr.js";import"./MetaBase-D0SrAd3r.js";import"./MetaItem-DpT-nc7q.js";import"./ProgressIcon-sXfec0ne.js";import"./ChevronUp-Dnc1erKd.js";import"./ChevronDown-CUSqX3Qn.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
