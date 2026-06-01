import{a7 as t}from"./iframe-D3QbR5Le.js";import{S as b}from"./ArrowRedo-Br8PBoUg.js";import{S as v}from"./EyeClosed-RGsbJjDq.js";import{S as I}from"./Archive-BPPn0ndA.js";import{S as k}from"./Trash-BkS8tkBS.js";import{S as w}from"./ClockDashed-DFvOJ2tV.js";import{C as n}from"./ContextMenu-DszTDAnz.js";import{i as l}from"./inboxSearchResults-DWEwGzMs.js";import{S as u}from"./TeddyBear-B2nc5IZF.js";import{L as x}from"./List-DwnCtREa.js";import{D as d}from"./DialogListItem-ewrq7Gf8.js";import{L as g}from"./ListItem-Bm9_FWTz.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DUFIDFh-.js";import"./Dropdown-DfrU0yXs.js";import"./SearchField-C1oRwJ9X.js";import"./MagnifyingGlass-odaglt7B.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./useHighlightedText-Cs6VCP7b.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./useMenu-CKRyFifW.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuListHeading-CUGWWC4c.js";import"./MenuItem-p2P7kMgy.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./Heading-D807jdih.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ChevronRight-CW8WMRnL.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./MenuElipsisHorizontal-Tn2MvOgZ.js";import"./dialogs-DYoPB1f5.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BA6pZAni.js";import"./AttachmentList-DZ1oOhI0.js";import"./AttachmentLink-De8uUclw.js";import"./File-ChXJOIkI.js";import"./Section-C8MEyA5r.js";import"./Flex-Dql3tqb8.js";import"./TransmissionList-Bqvnm80r.js";import"./Transmission-Dc6ay856.js";import"./SeenByLog-Dte4ga2B.js";import"./SeenByLogButton-BBP5anYH.js";import"./SeenByLogItem-CC2ME52E.js";import"./Byline-Dc9G7X2F.js";import"./Divider-D1ANnYjo.js";import"./DialogActions-DvQJkngT.js";import"./ButtonGroupDivider-TW74zNhR.js";import"./ChevronUp-CTGCEiGM.js";import"./ChevronDown-B0RV9pqr.js";import"./DropdownBase-DLRKCN_2.js";import"./useClickOutside-DHPXNwEq.js";import"./ButtonGroup-BYb3YlMN.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CEAJBqnC.js";import"./ItemLink-CZhIWltI.js";import"./DialogByline-SrQVQccP.js";import"./DialogMetadata-CPexBu-N.js";import"./DialogStatus-B-AfwMJA.js";import"./MetaItem-C6O-ZEC1.js";import"./ProgressIcon-Bsx8EDOV.js";import"./Paperclip-BjsLwjoT.js";import"./Files-Bw_-D_RG.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
