import{j as t}from"./iframe-DolAyTrH.js";import{S as b}from"./ArrowRedo-CHh34Tm9.js";import{S as v}from"./EyeClosed-DnE24zkq.js";import{S as I}from"./Archive-6i68OY6K.js";import{S as k}from"./Trash-BtLK7IU-.js";import{S as w}from"./ClockDashed-CqPNA9Gv.js";import{S as l}from"./TeddyBear-BU8vWrTl.js";import{i as u}from"./inboxSearchResults-BEKh5OeP.js";import{C as r}from"./ContextMenu-_AeiDa13.js";import{L as x}from"./List-4xKYlKr8.js";import{L as d}from"./ListItem-mIgAbn_b.js";import{D as g}from"./DialogListItem-DtBb10jr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CHjpN4lF.js";import"./dialogs-D2Rg9Hc0.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DRTwbNqo.js";import"./AttachmentList-D2YBNHv2.js";import"./AttachmentLink-DsFe4YGb.js";import"./Icon-DyTdluPS.js";import"./index-BGgdxP5s.js";import"./Skeleton-CgJZAB6S.js";import"./Badge-XZ4zcUXX.js";import"./Section-B969stp2.js";import"./Flex-DJLVkQLj.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./TransmissionList-C5Oayxvg.js";import"./Transmission-DpvP8QPU.js";import"./Typography-BxahTxrH.js";import"./SeenByLog-ua92kMYf.js";import"./SeenByLogButton-DpgcCLrK.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-B7A0z_e3.js";import"./Avatar-koXMFN1u.js";import"./SeenByLogItem-BxjxTINu.js";import"./Byline-BQhmmGjU.js";import"./Divider-BpkIomQy.js";import"./DialogActions-Ck8OeA6_.js";import"./ButtonGroupDivider-oAJG58yN.js";import"./ChevronUp-DUU9T22i.js";import"./ChevronDown-BVkX7yzQ.js";import"./DropdownBase-aUL7f3Ms.js";import"./useClickOutside-BBRnn-L_.js";import"./ButtonGroup-D7dkSlZP.js";import"./SearchField-O-g-s0at.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./XMark-DTdVjjyM.js";import"./FieldBase-Cd7L_EtW.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./Checkmark-CMV0hymD.js";import"./ItemControls-B_Hdv8nx.js";import"./ChevronRight-Duke-dAu.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-Bq_IdB92.js";import"./Dropdown-ByKasinV.js";import"./Tooltip-kZb4i6VJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-LYiBdi-l.js";import"./ItemLink-BGVSEM8D.js";import"./DialogByline-BMIeUJnP.js";import"./DialogMetadata-CJvOmErl.js";import"./DialogStatus-DeN8Jw-y.js";import"./Hourglass-USkviQi6.js";import"./MetaProgress-BG920O57.js";import"./MetaItemLabel-D7RJIAF2.js";import"./ProgressIcon-b2EN1YJQ.js";import"./MetaItem-B2qVuU0t.js";import"./MetaTimestamp-pD_MMwj8.js";import"./Paperclip-QEXeBZFB.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
