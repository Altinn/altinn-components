import{a7 as t}from"./iframe-DxDA2A5n.js";import{S as b}from"./ArrowRedo-DLqifpIV.js";import{S as v}from"./EyeClosed-C0TJktz8.js";import{S as I}from"./Archive-BP8GRpZJ.js";import{S as k}from"./Trash-Cq15ZLAx.js";import{S as w}from"./ClockDashed-B7pSLbPh.js";import{C as n}from"./ContextMenu-7PiEHvyZ.js";import{i as l}from"./inboxSearchResults-CpKr6IaG.js";import{S as u}from"./TeddyBear-aTuVPH0A.js";import{L as x}from"./List-BQK37DtS.js";import{D as d}from"./DialogListItem-xYTFMiFx.js";import{L as g}from"./ListItem-4aUvxfhJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CF0cOpjK.js";import"./Dropdown-BtLUP2GJ.js";import"./SearchField-m29TWzvo.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./FieldBase-D6edMMqi.js";import"./Typography-BpmyNFuo.js";import"./useHighlightedText-CKLIlaha.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";import"./useMenu-CesabFz-.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuListHeading-JM3VtJKJ.js";import"./MenuItem-DvVfNxyY.js";import"./ItemMedia-CnqN7ZMq.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./Heading-CDQRp2wK.js";import"./ItemControls-BB5vmDik.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./ChevronRight-B7TpiReR.js";import"./index-BrQU956K.js";import"./InformationSquare-D_k5oT3G.js";import"./MenuElipsisHorizontal-LmdkdYP-.js";import"./dialogs-CXVCdyau.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BVYrN970.js";import"./AttachmentList-DoDdI1Rt.js";import"./AttachmentLink-DxxjLm-H.js";import"./File-DF9Ovga3.js";import"./Section-BxDgugwi.js";import"./Flex-CfINokNW.js";import"./TransmissionList-CM07x7av.js";import"./Transmission-BUA52nkx.js";import"./SeenByLog-BUYFGwfC.js";import"./SeenByLogButton-CQ5_4rR2.js";import"./SeenByLogItem-QQYjMGZ7.js";import"./Byline-CkX8RVoL.js";import"./Divider-CDppsivb.js";import"./DialogActions-ZQ-n7BVq.js";import"./ButtonGroupDivider-HP7rml0w.js";import"./ChevronUp-ChUSKAgV.js";import"./ChevronDown-Cl8SGDa2.js";import"./DropdownBase-BWiV-__C.js";import"./useClickOutside-BvMy9bZ2.js";import"./ButtonGroup-BwP7xmaH.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-kZocBRUl.js";import"./ItemLink-DTz0HDfI.js";import"./DialogByline-BTyL3ydw.js";import"./DialogMetadata-n0fv_Ndq.js";import"./DialogStatus-CsStbEU-.js";import"./MetaItem-DIzj4kBd.js";import"./ProgressIcon-DFHkBQJn.js";import"./Paperclip-A-qYZix2.js";import"./Files-Kq7SEfsg.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
