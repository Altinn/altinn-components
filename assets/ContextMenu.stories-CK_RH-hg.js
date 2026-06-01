import{a7 as t}from"./iframe-cf7ESM3q.js";import{S as b}from"./ArrowRedo-DNO35Q87.js";import{S as v}from"./EyeClosed-6Gr-6-Ja.js";import{S as I}from"./Archive-SoY9DUBK.js";import{S as k}from"./Trash-DdUwR8QG.js";import{S as w}from"./ClockDashed-Tc18NaL0.js";import{C as n}from"./ContextMenu-ZO1EGpdQ.js";import{i as l}from"./inboxSearchResults-DvtarzNu.js";import{S as u}from"./TeddyBear-C3XYx_4J.js";import{L as x}from"./List-8ewPRx_4.js";import{D as d}from"./DialogListItem-wwYl24Qm.js";import{L as g}from"./ListItem-CXqD_edS.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BITRw-0y.js";import"./Dropdown-pCaEySNe.js";import"./SearchField-B1yhNL-S.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./FieldBase-D5M9JHnI.js";import"./Typography-C5h-r7_j.js";import"./useHighlightedText-D_wbJNXZ.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";import"./useMenu-_swqW8No.js";import"./MenuListItem-DNMoEwuU.js";import"./MenuListHeading-0GDPIxXY.js";import"./MenuItem-CoaVEq9r.js";import"./ItemMedia-AVOIN5K1.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Checkmark-DdKsblJH.js";import"./ItemLabel-DJAOCnpM.js";import"./Heading-CpNWi06X.js";import"./ItemControls-D6SRHxpV.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./ChevronRight-Dy1T7Tgm.js";import"./index-BVMz6Wm9.js";import"./InformationSquare-DtaIp5wP.js";import"./MenuElipsisHorizontal-BXY-RDWv.js";import"./dialogs-D5c25Ne_.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DeBXEPfo.js";import"./AttachmentList-CFFpOYOO.js";import"./AttachmentLink-DhXh2sKB.js";import"./File-Durrf_pM.js";import"./Section-DoG5yznh.js";import"./Flex-BG_p9pKV.js";import"./TransmissionList-B9LQuZ2O.js";import"./Transmission-C4GFfRJk.js";import"./SeenByLog-D5TB5WYH.js";import"./SeenByLogButton-BnQ2Q7cz.js";import"./SeenByLogItem-ChdToXB8.js";import"./Byline-CbgoR5kF.js";import"./Divider-PAHUgEWK.js";import"./DialogActions-8pk4Vkqp.js";import"./ButtonGroupDivider-C563b8RX.js";import"./ChevronUp-B_u4FtrM.js";import"./ChevronDown-DOXFb4Ko.js";import"./DropdownBase-DUi_DoDD.js";import"./useClickOutside-BujbUGIq.js";import"./ButtonGroup-7_JFosKC.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DBUySgC8.js";import"./ItemLink-C-gfXYm1.js";import"./DialogByline-Bd9VY3J9.js";import"./DialogMetadata-KXfpHCT-.js";import"./DialogStatus-BtNmpXId.js";import"./MetaItem-CaYYoCA0.js";import"./ProgressIcon-CIho_Q6O.js";import"./Paperclip-BpZjcFPO.js";import"./Files-BVDkhvKv.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
