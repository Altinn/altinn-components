import{j as t}from"./iframe-DDirkHus.js";import{S as b}from"./ArrowRedo-BnUqIaSz.js";import{S as v}from"./EyeClosed-BhD9KlXv.js";import{S as I}from"./Archive-CFZVdoBU.js";import{S as k}from"./Trash-D38buOH3.js";import{S as w}from"./ClockDashed-5U9eCaWp.js";import{S as l}from"./TeddyBear-BlwyndsT.js";import{i as u}from"./inboxSearchResults-DV-yQ639.js";import{C as r}from"./ContextMenu-DZDnk7kI.js";import{L as x}from"./List-Cjvw0Kzt.js";import{L as d}from"./ListItem-CNfUb6zi.js";import{D as g}from"./DialogListItem-DeKI8efd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVUrh2ea.js";import"./dialogs-BEAqxaoh.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CyLyiaic.js";import"./AttachmentList-CjjodBKu.js";import"./AttachmentLink-BJZ_tMym.js";import"./Icon-Cv1R39O2.js";import"./index-B2YDfdyU.js";import"./Skeleton-0VOrezcL.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./Section-CUHbf36A.js";import"./Flex-CKMYHSxr.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./TransmissionList-BzqQkyoL.js";import"./Transmission-BJsCLNcm.js";import"./Typography-Do8CAd45.js";import"./SeenByLog-pSeQGP_J.js";import"./SeenByLogButton-BWyR3Ehk.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./AvatarGroup-CxNYw_3L.js";import"./Avatar-DMl0Fglw.js";import"./SeenByLogItem-8ctQdChS.js";import"./Byline-BkaYJt38.js";import"./Divider-Cl3reezY.js";import"./DialogActions-IkMEYP92.js";import"./ButtonGroupDivider-CS2WBK-e.js";import"./ChevronUp-CfXo5p6V.js";import"./ChevronDown-BujCn4TJ.js";import"./DropdownBase-BFhqzAXp.js";import"./useClickOutside-BxYZb6cF.js";import"./ButtonGroup-B-c85YOq.js";import"./SearchField-CByF2bQh.js";import"./MagnifyingGlass-BGbR81wS.js";import"./XMark-DldqIUES.js";import"./FieldBase-BNjKJDB0.js";import"./Label-9QWpQ8Bw.js";import"./index-F2gU6D0V.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuListHeading-7XRfXaU1.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./Checkmark-MQqJd3cN.js";import"./ItemControls-CqR56LSR.js";import"./ChevronRight-BUOZMhwy.js";import"./useMenu-DLxXpcV8.js";import"./InformationSquare-D3Ojtweu.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-2ed30dPc.js";import"./Dropdown-CtjdzYco.js";import"./MenuElipsisHorizontal-BkKgR8yc.js";import"./ItemLink-ClwPv_--.js";import"./DialogByline-T7UBVLZU.js";import"./DialogMetadata-lGq2CmtZ.js";import"./DialogStatus-C2FRWn8f.js";import"./MetaItem-D7Mxk-TK.js";import"./ProgressIcon-Di5HT6-d.js";import"./Paperclip-CuA2Ouyz.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
