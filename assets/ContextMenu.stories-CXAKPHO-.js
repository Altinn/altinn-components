import{j as t}from"./iframe-Bka3lqwZ.js";import{S as b}from"./ArrowRedo-Bjt_cyz_.js";import{S as v}from"./EyeClosed-CUGWQw4B.js";import{S as I}from"./Archive-CG8d1DTP.js";import{S as k}from"./Trash-CKkWVRjk.js";import{S as w}from"./ClockDashed-DTJHTAOb.js";import{S as l}from"./TeddyBear-u20hMOpj.js";import{i as u}from"./inboxSearchResults-yIzm1z--.js";import{C as r}from"./ContextMenu-D2ehfNYC.js";import{L as x}from"./List-DrMi80p5.js";import{L as d}from"./ListItem-CvqbKmOV.js";import{D as g}from"./DialogListItem-C2boTKcv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BOUKUp4S.js";import"./dialogs-B7EP3sEJ.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CiGeCDJv.js";import"./AttachmentList-C8FS73qX.js";import"./AttachmentLink-DUb0eyVQ.js";import"./Icon-DoXRGO_6.js";import"./index-97QH58ax.js";import"./Skeleton-ECUY2hPc.js";import"./Badge-Dr-ny6rj.js";import"./Section-DgAAlgWN.js";import"./Flex-CDu7UET9.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./TransmissionList-BmS01d8q.js";import"./Transmission-BPnQqfW5.js";import"./Typography-CMwGEMpO.js";import"./SeenByLog-BRsZMhcp.js";import"./SeenByLogButton-BB1zJYE-.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-mAK5Ma76.js";import"./Avatar-DUWR3kRV.js";import"./SeenByLogItem-wp3TdpZB.js";import"./Byline-BxTXxcQb.js";import"./Divider-BS5IHdZL.js";import"./DialogActions-BGYedm48.js";import"./ButtonGroupDivider-CRf9txov.js";import"./ChevronUp-1mXV-FY3.js";import"./ChevronDown-7HdAqi_x.js";import"./DropdownBase-kw0JlleQ.js";import"./useClickOutside-afXVzWjz.js";import"./ButtonGroup-DnIZGAD0.js";import"./SearchField-CSZgV0pa.js";import"./MagnifyingGlass-ohRS00MN.js";import"./XMark-BopKFElT.js";import"./FieldBase-BlSXl2oz.js";import"./Label-Bo_SdTne.js";import"./index-CQEQ6FSB.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./Checkmark-Bf4nZE-q.js";import"./ItemControls-abhSx9yX.js";import"./ChevronRight-1C-HJkAE.js";import"./useMenu-Cu8ej4cj.js";import"./InformationSquare-BNmERE6I.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DQoP6UHy.js";import"./Dropdown-BPOECmw-.js";import"./Tooltip-tPkJ6t7_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BosBpfbA.js";import"./ItemLink-C9-2FncN.js";import"./DialogByline-DB8csG-W.js";import"./DialogMetadata-B-fNHC42.js";import"./DialogStatus-k_4iFbW9.js";import"./Hourglass-vpYY-3w0.js";import"./MetaProgress-kBbu7eOb.js";import"./MetaItemLabel-B1XVr7Zl.js";import"./ProgressIcon-DXCXtBna.js";import"./MetaItem-BP_ehuBS.js";import"./MetaTimestamp-BPGNXFXE.js";import"./Paperclip-D_7uE9LG.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
